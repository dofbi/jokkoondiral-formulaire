import { useFormContext } from 'react-hook-form'
import { useLocale } from '@/i18n/LocaleContext'

interface FormFieldProps {
  name: string
  label: string
  required?: boolean
  children: React.ReactNode
  description?: string
}

export function FormField({ name, label, required, children, description }: FormFieldProps) {
  const { formState: { errors } } = useFormContext()
  const { t } = useLocale()
  const error = errors[name]
  // Zod messages are stable error codes (see src/schemas/formulaire.ts) —
  // translate via dict.errors.*, falling back to the raw message (e.g. Zod's
  // own default "Invalid enum value..." text) for anything unmapped, rather
  // than showing the unresolved "errors.<code>" lookup path.
  const errorCode = error?.message as string | undefined
  const translated = errorCode ? t(`errors.${errorCode}`) : undefined
  const errorMessage = translated === `errors.${errorCode}` ? errorCode : translated

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
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
