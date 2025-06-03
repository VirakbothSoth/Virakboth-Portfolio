interface CertificateProps {
  image: string
  url: string
  altText: string
}

const Certificate: React.FC<CertificateProps> = ({ image, url, altText }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-item"
    >
      <img
        src={image}
        alt={altText}
      />
    </a>
  )
}

export default Certificate;
