{ pkgs }: {
    deps = [
      pkgs.haskellPackages.servant-multipart-client
      pkgs.cowsay
    ];
}