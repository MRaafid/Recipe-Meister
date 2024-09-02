import React from "react";
import PropTypes from "prop-types";

const RecipeCard = ({ data, onSelected }) => {
  const { id, recipeImg, title, description, keywords } = data;

  return (
    <div className="recipe-card" onClick={() => onSelected(id)}>
      <img className="recipe-img" src={recipeImg} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div className="keywords">
          {keywords.map(({ id, label }) => (
            <div className="keyword" key={id}>
              {label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

RecipeCard.defaultProps = {
  data: {
    id: "",
    recipeImg: "",
    title: "",
    description: "",
    keywords: [],
  },
  onSelected: () => {},
};

RecipeCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    recipeImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }),
  onSelected: PropTypes.func,
};

export default RecipeCard;
