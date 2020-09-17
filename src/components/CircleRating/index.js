import React from 'react';

export const CircleRating = ({
  progressStatus,
  specialClass,
  tittle,
  position,
  number
}) => {

  let progress = progressStatus;

  let radius = 60;
  const stroke = 4;
  let normalizedRadius = 57;
  let circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <div className={`circle-rating cirle-rating__featured`}>
      <p className="circle-rating__description">{tittle}</p>
      <div className="circle-rating__container">
        <div className={`circle-rating__background ${position}`}></div>
        <div className={`${position}`}>
          <span className="circle-rating__magical-number">{number}</span>
          <svg
            height={radius * 2}
            width={radius * 2}

          >
            <circle
              className={`${specialClass}`}
              fill='transparent'
              strokeWidth={ stroke }
              strokeDasharray={ circumference + ' ' + circumference }
              style={ { strokeDashoffset } }
              stroke-width={ stroke }
              r={ normalizedRadius }
              cx={ radius }
              cy={ radius }
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
