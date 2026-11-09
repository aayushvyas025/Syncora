function OnlineUserFilters({
  title,
  filterUsers,
  filteredUser,
  totalOnlineUsers,
}) {
  return (
    <div className="mt-3 hidden lg:flex items-center gap-2">
      <label className="cursor-pointer flex items-center gap-2">
        <input
          type="checkbox"
          checked={filteredUser}
          onChange={filterUsers}
          className="checkbox checkbox-sm"
        />
        <span className="text-sm">{title}</span>
      </label>
      <span className="text-sm text-zinc-500">{totalOnlineUsers}</span>
    </div>
  );
}

export default OnlineUserFilters;
