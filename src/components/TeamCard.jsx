import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({ name, role, image, socials, iconClass }) => {
return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-white/20 hover:shadow-2xl transition-all duration-300 w-[90vw] md:w-[30vw]"
    >
        {/* Profile Image */}
        <div className="w-28 h-28 mb-4">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center rounded-full border-4 border-transparent  p-1"
            />
        </div>

        {/* Name & Role */}
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{role}</p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-auto">
            {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClass} text-lg flex items-center justify-center`}
                    >
                        <Icon />
                    </a>
                );
            })}
        </div>
    </motion.div>
);
};

export default TeamCard;
