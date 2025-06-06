import { Schema, model } from "mongoose";

interface IStatistic {
  visit: number;
}

const statisticSchema = new Schema<IStatistic>({
  visit: {
    type: Number,
    default: 0,
  },
});

export const Statistic = model<IStatistic>("Statistic", statisticSchema);
