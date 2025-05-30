// Authentication utility functions


export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


//Validation 
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

/**
 * Simulates user login API call
 * @param {object} credentials - User credentials {email, password}
 * @returns {Promise<object>} - Login result
 */
export const loginUser = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log credentials to console (as requested)
  console.log('Login attempt:', {
    email: credentials.email,
    password: '***hidden***', // Don't log actual passwords
    timestamp: new Date().toISOString()
  });
  
  // Simulate different responses based on email
  if (credentials.email === 'admin@example.com' && credentials.password === 'password123') {
    return {
      success: true,
      user: {
        id: 1,
        email: credentials.email,
        name: 'Admin User'
      },
      token: 'fake-jwt-token-' + Date.now()
    };
  } else if (credentials.email === 'user@example.com') {
    return {
      success: false,
      message: 'Invalid password'
    };
  } else {
    return {
      success: false,
      message: 'User not found'
    };
  }
};

/**
 * Formats user data for display
 * @param {object} user - User object
 * @returns {object} - Formatted user data
 */
export const formatUserData = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    initials: user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : '',
    joinedDate: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : null
  };
};

/**
 * Stores user session data
 * @param {object} userData - User data to store
 */
export const setUserSession = (userData) => {
  // In a real app, you might use localStorage, sessionStorage, or a state management library
  // For this example, we'll just log it
  console.log('User session set:', userData);
};

/**
 * Clears user session
 */
export const clearUserSession = () => {
  console.log('User session cleared');
};

/**
 * Gets stored user session
 * @returns {object|null} - User session data or null
 */
export const getUserSession = () => {
  // In a real app, you would retrieve from storage
  // For this example, return null
  return null;
};