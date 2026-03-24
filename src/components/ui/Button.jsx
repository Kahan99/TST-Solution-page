import { motion } from "framer-motion";

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  // Added relative, overflow-hidden, and group to enable the absolute ripple pseudo-element effect
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-colors text-sm overflow-hidden group";
  
  // Adjusted text hover colors based on the ripple fill
  const variants = {
    primary: "bg-[#35B729] text-white",
    outline: "border border-[#35B729] bg-transparent text-[#35B729] hover:text-white",
    ghost: "bg-transparent text-slate-600 hover:text-[#35B729]"
  };

  // Define the ripple color based on variant
  const rippleStyle = variant === 'primary' 
    ? "bg-white/30" 
    : variant === 'outline'
    ? "bg-[#35B729]"
    : "bg-slate-50";

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {/* Ripple Animation Element */}
      {variant !== 'ghost' ? (
         <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full transition-all duration-500 ease-out group-hover:w-[300px] group-hover:h-[300px] opacity-0 group-hover:opacity-100 ${rippleStyle}`}></span>
      ) : (
         <span className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${rippleStyle}`}></span>
      )}
      
      {/* Content wrapper to ensure text stays above the ripple (z-10) */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
}
