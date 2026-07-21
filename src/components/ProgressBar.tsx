import { useLocale } from '@/i18n/LocaleContext'

interface ProgressBarProps {
  steps: string[]
  currentStep: number
}

export function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  const { dict } = useLocale()
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-jokko-primary">
          {dict.progress.stepLabel} {currentStep + 1}/{steps.length}
        </span>
        <span className="text-sm text-gray-500">
          {steps[currentStep]}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-jokko-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <div 
            key={step}
            className={`text-xs ${
              index <= currentStep ? 'text-jokko-primary font-medium' : 'text-gray-400'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
