export function ProductPageSkeleton() {
    return (
        <main className="w-full animate-pulse">
            <div className="flex flex-col items-center">
                <div className="sticky top-20 w-full lg:hidden">
                    <div className="w-full bg-preto flex items-center p-4 md:px-8 gap-4 md:gap-8">
                        <div className="h-10 w-full bg-cinza-border/20 rounded-md"></div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center lg:flex-row lg:w-full">
                    <div className="flex flex-col items-center justify-center h-full md:w-1/2 lg:w-2/5 shrink-0 p-4 md:p-8">
                        <div className="h-96 w-96 bg-cinza-border/20 rounded-md"></div>
                    </div>
                    <div className="w-full flex flex-col border-t lg:border-l lg:border-t-0 border-cinza-border/20">
                        <div className="sticky top-20 w-full hidden lg:flex">
                            <div className="w-full bg-preto flex items-center p-4 md:px-8 gap-4 md:gap-8">
                                <div className="h-14 w-full bg-cinza-border/20 rounded-md"></div>
                            </div>
                        </div>

                        <div className="flex flex-col p-4 md:p-8 gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-20 bg-cinza-border/20 rounded-md"></div>
                                <div className="h-14 w-44 bg-cinza-border/20 rounded-md"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-20 bg-cinza-border/20 rounded-md"></div>
                                <div className="h-8 w-44 bg-cinza-border/20 rounded-md"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-20 bg-cinza-border/20 rounded-md"></div>
                                <div className="h-8 w-44 bg-cinza-border/20 rounded-md"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-20 bg-cinza-border/20 rounded-md"></div>
                                <div className="h-20 w-full bg-cinza-border/20 rounded-md"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-20 bg-cinza-border/20 rounded-md"></div>
                                <div className="flex items-center gap-4">
                                    <div className="h-8 w-16 bg-cinza-border/20 rounded-md"></div>
                                    <div className="h-8 w-16 bg-cinza-border/20 rounded-md"></div>
                                    <div className="h-8 w-16 bg-cinza-border/20 rounded-md"></div>
                                    <div className="h-8 w-16 bg-cinza-border/20 rounded-md"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="flex flex-col p-3 gap-3 shrink-0 border border-cinza-border/20 rounded-lg">
                                    <div className="h-40 w-full bg-cinza-border/20 rounded-md" />
                                    <div className="flex items-center justify-between">
                                        <div className="h-8 w-full bg-cinza-border/20 rounded-md"></div>
                                        <div className="h-8 w-20 bg-cinza-border/20 ml-4 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col p-3 gap-3 shrink-0 border border-cinza-border/20 rounded-lg">
                                    <div className="h-40 w-full bg-cinza-border/20 rounded-md" />
                                    <div className="flex items-center justify-between">
                                        <div className="h-8 w-full bg-cinza-border/20 rounded-md"></div>
                                        <div className="h-8 w-20 bg-cinza-border/20 ml-4 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
