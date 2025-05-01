export interface IHost {
  host: string;
  port: string;
}

export interface IDatabase extends IHost {
  type: string;
  username: string;
  password: string;
  dbname: string;
}

export interface IServiceConfig extends IHost, IDatabase {}
export interface ICommonConfig {
  kafka: IHost;
}

export interface IConfig {
  common: ICommonConfig;
  service: Record<string, IServiceConfig>;
}
