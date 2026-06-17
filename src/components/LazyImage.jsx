import { useState } from "react";

/**
 * Thin wrapper around <img> that:
 *  - defers loading via the native `loading="lazy"` attribute (zero JS cost)
 *  - fades the image in once it has actually loaded, to avoid a jarring pop-in
 * No external libraries required, so it adds ~0kb to the bundle.
 */
const LazyImage = ({ src, alt, className = "", ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`lazy-img${loaded ? " lazy-img-loaded" : ""}${
        className ? ` ${className}` : ""
      }`}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
};

export default LazyImage;
