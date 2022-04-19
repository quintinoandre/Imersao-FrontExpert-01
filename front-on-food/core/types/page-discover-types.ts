type CityProps = {
	id: number;
	name: string;
	slug: string;
	catalogEstimated: number;
};

type ParamsStaticProps = {
	params: { city: string };
};

type PageDiscoverProps = {
	city: CityProps;
};

export type { CityProps, ParamsStaticProps, PageDiscoverProps };
