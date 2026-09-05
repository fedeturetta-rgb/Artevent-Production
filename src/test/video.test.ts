import { describe, expect, it } from "vitest";

import { getVideoEmbedUrl, getVideoPreloadUrl, isEmbeddableVideoUrl, isMuxVideoUrl } from "@/lib/video";

describe("video helpers", () => {
  it("detects embeddable providers including Google Drive", () => {
    expect(isEmbeddableVideoUrl("https://www.youtube.com/watch?v=abc123")).toBe(true);
    expect(isEmbeddableVideoUrl("https://vimeo.com/123456")).toBe(true);
    expect(isEmbeddableVideoUrl("https://player.mux.com/abc123")).toBe(true);
    expect(
      isEmbeddableVideoUrl("https://drive.google.com/file/d/1txr3GK9RK6-8h_SVGQV1Llt5DIZPR5KA/view?usp=share_link"),
    ).toBe(true);
    expect(isEmbeddableVideoUrl("/videos/local-file.mp4")).toBe(false);
  });

  it("converts Google Drive share links into autoplaying preview embeds", () => {
    expect(
      getVideoEmbedUrl("https://drive.google.com/file/d/1txr3GK9RK6-8h_SVGQV1Llt5DIZPR5KA/view?usp=share_link"),
    ).toBe("https://drive.google.com/file/d/1txr3GK9RK6-8h_SVGQV1Llt5DIZPR5KA/preview?autoplay=1");
  });

  it("enables autoplay for Mux embeds without showing a video title", () => {
    expect(getVideoEmbedUrl("https://player.mux.com/abc123?video-title=Demo&thumbnail-time=2")).toBe(
      "https://player.mux.com/abc123?thumbnail-time=2&autoplay=true",
    );
  });

  it("preloads Mux embeds without autoplay", () => {
    expect(getVideoPreloadUrl("https://player.mux.com/abc123?autoplay=true")).toBe(
      "https://player.mux.com/abc123?preload=auto",
    );
    expect(isMuxVideoUrl("https://player.mux.com/abc123")).toBe(true);
    expect(isMuxVideoUrl("https://drive.google.com/file/d/abc123/preview")).toBe(false);
  });

  it("preserves non-Google Drive URLs", () => {
    const vimeoUrl = "https://player.vimeo.com/video/555333111";

    expect(getVideoEmbedUrl(vimeoUrl)).toBe(vimeoUrl);
  });
});
