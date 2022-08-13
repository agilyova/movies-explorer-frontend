import React from "react";

function LoadMoreButton({ onLoadMore }) {
  const handleLoadMoreClick = () => {
    onLoadMore();
  };

  return (
    <button
      className="button movies__load-more-button"
      onClick={handleLoadMoreClick}
    >
      Ещё
    </button>
  );
}

export default LoadMoreButton;
