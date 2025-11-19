exports.handler = async (event, context) => {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  const username = process.env.TWITCH_USERNAME || "mstrmatthew";

  if (!clientId || !clientSecret || !username) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Twitch configuration" }),
    };
  }

  try {
    // Get an app access token from Twitch
    const tokenResponse = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Could not get Twitch access token" }),
      };
    }

    // Ask Twitch if this user is live
    const streamResponse = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(
        username
      )}`,
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const streamData = await streamResponse.json();
    const live =
      Array.isArray(streamData.data) && streamData.data.length > 0;

    let info = null;
    if (live) {
      const s = streamData.data[0];
      info = {
        title: s.title,
        game_name: s.game_name,
        viewer_count: s.viewer_count,
        started_at: s.started_at,
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ live, info }),
    };
  } catch (err) {
    console.error("Error checking Twitch live status:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to check Twitch status" }),
    };
  }
};

