import React, { useEffect, useRef, useState } from "react";
import { stats } from "../data/portfolioData";
import "./Stats.css";

const useCountUp = (target, suffix, isVisible) => {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!isVisible || animated.current) return;
    animated.current = true;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return `${count}${suffix}`;
};

const StatItem = ({ target, suffix, label, isVisible }) => {
  const display = useCountUp(target, suffix, isVisible);
  return (
    <div className="stat-item reveal">
      <span className="stat-num">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-inner">
          <div className="stats-heading reveal">
            Transforming Ideas Into Digital Impact
          </div>
          {stats.map((s) => (
            <StatItem
              key={s.label}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
