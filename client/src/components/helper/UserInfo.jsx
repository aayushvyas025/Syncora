function UserInfo({ info, icon: Icon, title }) {
  return (
    <div className="space-y-1.5">
      <div className="text-sm text-zinc-400 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {title}
      </div>
      <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{info}</p>
    </div>
  );
}

export default UserInfo;
