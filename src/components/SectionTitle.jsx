const SectionTitle = ({ label, title, description, light = false }) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {label && (
        <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
          {label}
        </p>
      )}

      <h2
        className={`text-3xl md:text-5xl font-extrabold mt-3 leading-tight ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 leading-8 text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
