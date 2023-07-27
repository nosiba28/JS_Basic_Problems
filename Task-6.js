function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@~#`$%^&*()-_=+[]{}/|;:,.<>?';
  
  
    let password = '';
    for (let i = 0; i < length/4; i++) {
      let randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
      password += uppercaseLetters.charAt(randomIndex);
  
      randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
      password += lowercaseLetters.charAt(randomIndex);
  
      randomIndex = Math.floor(Math.random() * numbers.length);
      password += numbers.charAt(randomIndex);
  
      randomIndex = Math.floor(Math.random() * specialCharacters.length);
      password += specialCharacters.charAt(randomIndex);
   
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log('Random Password:', randomPassword);