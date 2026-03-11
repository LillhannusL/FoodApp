import Link from "next/link";

export default function NavBar() {
  return (
    <div className="dock">
      <button>
        <Link href="/">
          <span className="dock-label">Home</span>
        </Link>
      </button>
      <button>
        <Link href="/recipes">
          <span className="dock-label">Recipes</span>
        </Link>
      </button>
    </div>
  );
}
