declare namespace Prismic {
  type ShardingOptions = "auto" | number;

  interface PrismicClientOptions {
    shards: ShardingOptions;
  }
}
