const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-_+';

export const generatePassword = (options) => {
  const { length, lowercase, uppercase, numbers, symbols } = options;
  let characterPool = '';

  if (lowercase) characterPool += lowercaseChars;
  if (uppercase) characterPool += uppercaseChars;
  if (numbers) characterPool += numberChars;
  if (symbols) characterPool += symbolChars;

  if (!characterPool) return '';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};
