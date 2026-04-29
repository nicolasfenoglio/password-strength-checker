import GenerateIcon from '../../../shared/icons/GenerateIcon';
import ArrowIcon from '../../../shared/icons/ArrowIcon';

export default function PasswordGenerateButton({
  onClick,
  toggleOptions,
  isOpen,
}) {
  return (
    <div className="flex pt-2">
      <div className="flex w-full rounded-md overflow-hidden shadow-elev">
        <button
          type="button"
          onClick={() => onClick()}
          className="flex-1 flex items-center justify-start gap-2 px-4 py-2 bg-primary text-accent-contrast hover:cursor-pointer hover:bg-primary-600 transition"
        >
          <GenerateIcon className="size-5" />
          Generar contraseña segura
        </button>
        <div className="w-px bg-white/20" />
        <button
          type="button"
          onClick={toggleOptions}
          className="w-[20%] min-w-12 flex items-center justify-center bg-primary text-accent-contrast hover:cursor-pointer hover:bg-primary-600 transition"
        >
          <ArrowIcon
            className={`
                        size-5 
                        transform transition-transform duration-300 ease-in-out
                      `}
            open={isOpen}
          />
        </button>
      </div>
    </div>
  );
}
