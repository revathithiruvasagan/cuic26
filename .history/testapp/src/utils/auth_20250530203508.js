// Authentication utility functions



export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: 'Password is required' };
  }
  
  if (password.length < 6) {
    return { isValid: false, message: 'Password must be at least 6 characters' };
  }
  
  if (password.length < 8) {
    return { isValid: true, message: 'Password strength: Weak' };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const strengthCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
  
  if (strengthCount >= 3) {
    return { isValid: true, message: 'Password strength: Strong' };
  } else if (strengthCount >= 2) {
    return { isValid: true, message: 'Password strength: Medium' };
  } else {
    return { isValid: true, message: 'Password strength: Weak' };
  }
};


export const loginUser = async (credentials) => {
 
  await new Promise(resolve => setTimeout(resolve, 500));
  
  //Console log
  console.log('Login Data:', JSON.stringify(credentials, null, 2));

  return {
    success: true,
    message: 'Login data logged to console successfully!'
  };
};

//
export const formatUserData = (user) => {
  const formatted = {
    email: user.email,
    loginTime: new Date().toISOString()
  };
  
  // Log formatted data
  console.log('Formatted user data:', JSON.stringify(formatted, null, 2));
  
  return formatted;
};

/**
 * Stores user session data - just logs to console
 * @param {object} userData - User data to store
 */
export const setUserSession = (userData) => {
  console.log('User session data:', JSON.stringify(userData, null, 2));
};

/**
 * Clears user session - just logs to console
 */
export const clearUserSession = () => {
  console.log('User session cleared at:', new Date().toISOString());
};

/**
 * Gets stored user session - returns null for simplicity
 * @returns {null} - Always returns null
 */
export const getUserSession = () => {
  console.log('Getting user session - none stored');
  return null;
};