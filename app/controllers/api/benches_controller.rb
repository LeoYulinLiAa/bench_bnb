class Api::BenchesController < ApplicationController
  def index
    n = params["north"]
    s = params["south"]
    w = params["west"]
    e = params["east"]
    @benches = if n && s && w && e
                 Bench.where(lat: s..n, lon: w..e)
               else
                 Bench.all
               end
  end

  def show
    bench = Bench.find_by_id(params[:id])
    if bench
      @benches = [bench]
      render :index
    else
      render json: ["Bench not found"], status: 404
    end
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lon);
  end
end
