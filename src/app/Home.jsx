import { useState } from 'react';
import ShieldIcon from '../shared/icons/ShieldIcon';
import {
  PasswordInputPanel,
  PasswordGeneratorPanel,
  PasswordGenerateButton,
  usePassword,
  usePasswordGenerator,
  usePasswordStrength,
} from '../features/password';
import { ToastContainer, useToasts } from '../shared/toast';

export default function Home() {
  const { toasts, addToast, removeToast, pauseTimer, resumeTimer } =
    useToasts();
  const { password, setPassword, results, normalizedScore } = usePassword();
  const { options, setOptions, generatePassword } = usePasswordGenerator({
    setPassword,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => setIsOpen((prev) => !prev);

  const handleOptionChange = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main className="flex flex-col p-4 bg-bg h-max w-full items-center justify-center">
      <div className="max-w-xl text-center mb-2">
        <h1 className="text-3xl font-semibold text-primary-600 mb-3">
          Generador y Evaluador de Contraseñas
        </h1>
        <p className="text-muted">
          Crea o pega una contraseña para verificar su seguridad al instante con
          estándares de nivel bancaria.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full max-w-lg min-h-1/2 bg-surface shadow-elev rounded-lg p-6 flex flex-col gap-4"
      >
        <h1 className="flex flex-row gap-1 text-primary-400 font-bold">
          <ShieldIcon className="size-6 text-primary-600" /> Control de
          Seguridad
        </h1>

        <PasswordInputPanel
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onCopy={() => {
            console.log('Contraseña copiada al portapapeles');
            addToast('Contraseña copiada al portapapeles', {
              type: 'success',
            });
          }}
          results={results}
          normalizedScore={normalizedScore}
        />

        <PasswordGenerateButton
          onGenerate={() => {
            generatePassword();
            addToast('Contraseña generada exitosamente', {
              type: 'success',
            });
          }}
          toggleOptions={toggleOptions}
          isOpen={isOpen}
        />
        {isOpen && (
          <>
            <hr className="my-1 border-muted/20 border-t-2" />
            <PasswordGeneratorPanel
              options={options}
              onOptionChange={handleOptionChange}
            />
          </>
        )}
        <p className="flex flex-row text-xs self-center gap-2 items-center">
          <ShieldIcon className="size-3" /> Tu contraseña no se guarda en ningún
          momento.
        </p>
      </form>
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
        pauseTimer={pauseTimer}
        resumeTimer={resumeTimer}
      />
    </main>
  );
}
