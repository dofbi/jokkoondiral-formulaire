import { useFormContext } from 'react-hook-form'

interface FormFieldProps {
  name: string
  label: string
  required?: boolean
  children: React.ReactNode
  description?: string
}

export function FormField({ name, label, required, children, description }: FormFieldProps) {
  const { formState: { errors } } = useFormContext()
  const error = errors[name]

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && (
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      )}
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message as string}
        </p>
      )}
    </div>
  )
}
