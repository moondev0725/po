import { useEffect, useRef, useState } from 'react';

export function Reveal({ as: Comp = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Comp ref={ref} className={`${className} reveal${show ? ' show' : ''}`.trim()} {...rest}>
      {children}
    </Comp>
  );
}
