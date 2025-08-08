import Image from "next/image";

interface CertProp {
  image: string;
  url: string;
  altText: string;
}

const Certificate: React.FC<CertProp> = ({ image, url, altText }) => {
  return (
    <figure>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={image}
          alt={altText}
          width={200}
          height={156}
          className="certificate-item"
          quality={1}
        />
      </a>
    </figure>
  );
};

export default Certificate;
