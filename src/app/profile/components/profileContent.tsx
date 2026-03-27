"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import ContentBox from "@/components/shared/ContentBox";
import Image from "next/image";
import { useUser } from "@/components/shared/UserProvider";
import { getFavorites } from "@/lib/utils/FavoritesFunctions";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfileContent({ currentUser }: any) {
  const router = useRouter();
  const { user, isLoading: authLoading } = useUser();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const fetchFavs = async () => {
      if (user) {
        setLoading(true);
        try {
          const data = await getFavorites(supabase, user.id);
          setFavorites(data || []);
        } catch (error) {
          console.error("Could not fetch favorites:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    if (!authLoading) {
      fetchFavs();
    }
  }, [user, authLoading]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const getInitials = function (name: string) {
    const parts = name.split(" ");
    let initials = "";
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0];
      }
    }
    return initials;
  };

  const initials = getInitials(currentUser.user_metadata?.display_name);

  return (
    <section className="flex flex-col items-center mb-20">
      <h1 className="pb-8 pt-10 text-center md:pt-28">Welcome back!</h1>

      <ContentBox>
        <div className="flex flex-col items-center">
          <div className="avatar avatar-placeholder py-4">
            <div className="bg-light-primary/50 text-dark-primary w-24 rounded-full">
              <span className="uppercase text-4xl">{initials}</span>
            </div>
          </div>

          <p className="text-3xl font-semibold">
            {currentUser.user_metadata?.display_name || currentUser.email}
          </p>
        </div>

        <div className="divider m-0"></div>

        <div className="w-full mx-auto">
          <h2 className="text-xl font-semibold pb-4 text-center">
            Saved Recipes
          </h2>

          {authLoading || loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 w-full">
                <div className="skeleton h-48 w-full rounded-2xl"></div>
              </div>
            </div>
          ) : (
            <>
              {favorites.length === 0 ? (
                <div className="w-full mx-auto flex flex-col items-center">
                  <p className="text-lg pb-4">
                    You don't have any favorites yet
                  </p>
                  <button className="btn btn-wide bg-primary-btn border-none shadow-md mt-4">
                    <Link href="/results?type=random">Find new recipes!</Link>
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-6 w-full px-4">
                  {favorites.map((fav) => (
                    <Link
                      key={fav.recipe_id}
                      href={`/recipes/${fav.recipe_id}`}
                      className="group w-[280px] flex-none bg-light-primary/80 rounded-2xl overflow-hidden border border-light-primary/10 transition-all shadow-lg"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={fav.recipe_image}
                          alt={fav.recipe_title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg line-clamp-1">
                          {fav.recipe_title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="divider my-8"></div>

        <button
          onClick={handleSignOut}
          className="btn btn-outline btn-error mx-auto mt-auto"
        >
          Log out
        </button>
      </ContentBox>
    </section>
  );
}
