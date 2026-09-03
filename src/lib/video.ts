const EMBED_VIDEO_HOSTS = ["youtube.com", "youtu.be", "vimeo.com", "drive.google.com", "player.mux.com"];

function normalizeGoogleDriveUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname !== "drive.google.com") {
      return url;
    }

    const pathMatch = parsedUrl.pathname.match(/^\/file\/d\/([^/]+)/);
    const queryId = parsedUrl.searchParams.get("id");
    const fileId = pathMatch?.[1] ?? queryId;

    if (!fileId) {
      return url;
    }

    return `https://drive.google.com/file/d/${fileId}/preview`;
  } catch {
    return url;
  }
}

export function getVideoEmbedUrl(url: string): string {
  const normalizedUrl = normalizeGoogleDriveUrl(url);

  try {
    const parsedUrl = new URL(normalizedUrl);

    if (parsedUrl.hostname === "player.mux.com") {
      parsedUrl.searchParams.set("autoplay", "true");
    }

    if (parsedUrl.hostname === "drive.google.com") {
      parsedUrl.searchParams.set("autoplay", "1");
    }

    return parsedUrl.toString();
  } catch {
    return normalizedUrl;
  }
}

export function isEmbeddableVideoUrl(url: string): boolean {
  return EMBED_VIDEO_HOSTS.some((host) => url.includes(host));
}
