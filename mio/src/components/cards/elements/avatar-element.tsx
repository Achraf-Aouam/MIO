import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Avatarelement = ({
  image,
  fallback,
  title,
  subtitle,
  data,
}: {
  image: string;
  fallback: string;
  title: string;
  subtitle: string;
  data: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src={image} alt="Avatar" />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="ml-auto font-medium">{data}</div>
    </div>
  );
};

export default Avatarelement;
