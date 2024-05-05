import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="w-full bg-destructive p-3 my-4 rounded-md flex items-center gap-x-2 font-semibold text-destructive-foreground">
      <AlertTriangle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
