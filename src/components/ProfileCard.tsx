import ImageModal from "./ImageModal";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  role: string;
  university: string;
  email: string;
  quote: string;
  imageSrc: string;
  linkedInUrl: string;
  objectPosition?: string;
}

export default function ProfileCard({
  name,
  role,
  university,
  email,
  quote,
  imageSrc,
  linkedInUrl,
  objectPosition = "center",
}: ProfileCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 w-full max-w-md mx-auto">
      {/* image */}
        <ImageModal src={imageSrc} alt={`${name} Profile`} objectPosition={objectPosition} />
      {/* introduction */}
      <div className="text-center text-[#5e3b1b]">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm font-medium mb-2">{role}</p>
        <p className="text-sm font-medium mb-2">🎓 {university} 🎓</p>
        <p className="text-sm font-medium mb-2">Email: {email}</p>
        <p className="text-sm leading-relaxed text-gray-800">
          "{quote}"
        </p>
      </div>
      {/* LinkedIn */}
      <div className="mt-6 flex justify-center">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#5e3b1b] text-white hover:bg-[#b47938] transition">View LinkedIn</Button>
        </a>
      </div>
    </div>
  );
}
