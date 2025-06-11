import Image from 'next/image'

interface CertProp {
  image: string
  url: string
  altText: string
}

const Certificate: React.FC<CertProp> = ({ image, url, altText }) => {
  return (
    <figure>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-item"
      >
        <Image
          src={image}
          alt={altText}
          width={300}
          height={256}
          className="w-auto h-64 object-contain"
        />
      </a>
    </figure>
  )
}

export default Certificate
