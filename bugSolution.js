The primary solution is to avoid relying on Expo Go for testing apps that heavily use native modules.  Instead, use EAS Build to create a standalone build, which solves the problem by avoiding the limitations of the Expo Go environment.

If you must test using Expo Go, consider simplifying your dependencies.  Remove any unnecessary native modules or look for alternatives that don't require them.