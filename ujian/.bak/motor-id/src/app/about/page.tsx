export default function Page() {
  return (
    <div className="w-full pt-20">
      {/* visi msisi */}
      <div className="flex md:justify-center md:text-center">
        <div className="w-full space-y-3 md:max-w-md">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="leading-relaxed text-muted-foreground">
            Heres our plans
          </p>
        </div>
      </div>
      <div className="flex md:justify-center">
        <div className="w-full md:max-w-4xl">
          <div className="mt-10 flex flex-col gap-10 md:flex-row">
            <div className="w-full space-y-5 lg:max-w-lg">
              <h1 className="text-lg font-semibold">Visi</h1>
              <p className="leading-relaxed text-muted-foreground">
                To become Indonesia leading motorcycle community that inspires
                and unites automotive enthusiasts, fostering a spirit of
                togetherness and innovation to build a culture of safe,
                responsible, and brotherly riding.
              </p>
            </div>
            <div className="w-full space-y-5 lg:max-w-lg">
              <h1 className="text-lg font-semibold">Misi</h1>
              <p className="leading-relaxed text-muted-foreground">
                To give people the power to build community and bring the world
                closer together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* kelebihan dan kekurangan */}
      <div className="flex md:justify-center">
        <div className="w-full md:max-w-4xl">
          <div className="mt-10 flex flex-col gap-10 md:flex-row">
            <div className="w-full space-y-5 lg:max-w-lg">
              <h1 className="text-lg font-semibold">Kelebihan</h1>
              <p className="leading-relaxed text-muted-foreground">
                MotorID excels in fostering a strong sense of camaraderie among
                motorcycle enthusiasts, offering a platform for members to share
                their passion, participate in well-organized events, and build
                lasting connections within the community.
              </p>
            </div>
            <div className="w-full space-y-5 lg:max-w-lg">
              <h1 className="text-lg font-semibold">Kekurangan</h1>
              <p className="leading-relaxed text-muted-foreground">
                Despite its growth, MotorID faces challenges in reaching members
                across Indonesia uniformly and organizing events that engage the
                entire community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
