function Avatar({ image, alt }) {
  return (
    <div className="avatar">
      <div className="size-10 rounded-full relative">
        <img src={image || "./profile-pic.avif"} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
