import React from 'react'
const designSteps = [
  {
    number: "01",
    title: "Аналитика",
    description:
      "Выявляем цели и критерии успеха продукта. Собираем данные, проводим глубинные интервью, анализируем полученную информацию и формулируем выводы о продукте, пользователях и их поведении.",
  },
  {
    number: "02",
    title: "Проектирование",
    description:
      "Генерируем идеи, создаем прототипы и тестируем их в UX‑лаборатории для определения наиболее эффективных решений.",
  },
  // Добавьте остальные этапы аналогично
];

const DesignBoxCard = ({ number, title, description }) => {
  return (
    <div className="design-box-card">
    <div className="box-text">
      <h3>{design.number}</h3>
      <h4 className="design-box-title">{design.title}</h4>
    </div>
    <p>{design.description}</p>
  </div>
  )
}

export default DesignBoxCard