import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="w-full bg-destructive text-destructive-foreground p-3 my-4 rounded-md flex items-center justify-center gap-x-2 font-bold text-lg">
      <AlertTriangle className="h-6 w-6" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
