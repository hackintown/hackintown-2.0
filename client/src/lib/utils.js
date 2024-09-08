import styles from "../components/ui/Button/Button.module.css";
export const getButtonClassName = (variant, size, disabled) => {
  const baseClass = "button";
  const variantClass = styles[variant] || styles.primary; // Default to 'primary' if no valid variant is passed
  const sizeClass = styles[size] || styles.medium; // Default to 'medium' if no valid size is passed

  return `${styles[baseClass]} ${variantClass} ${sizeClass} ${
    disabled ? styles.disabled : ""
  }`;
};
