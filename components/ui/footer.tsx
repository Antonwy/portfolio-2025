function Footer() {
  return (
    <footer className="p-6 flex flex-col gap-4 items-center justify-center">
      {/* <div className="relative aspect-square w-12 overflow-hidden rounded-full">
        <Image
          src="/portrait.webp"
          alt="Anton Wyrowski"
          fill
          sizes="33vw, (min-width: 768px) 16vw"
          className="object-cover"
        />
      </div> */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Anton Wyrowski. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
