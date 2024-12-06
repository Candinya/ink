interface LocalImageProps {
  className: string;
  src: StaticImageData;
  alt: string;
}
const LocalImage = ({ className, src, alt }: LocalImageProps) => (
  <div className={`w-full h-full rounded overflow-clip group ${className}`}>
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      src={src}
      alt={alt}
    />
  </div>
);

export default LocalImage;
