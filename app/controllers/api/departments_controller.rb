class Api::DepartmentsController < ApplicationController

  before_action :authenticate_user! only: [:create, :update, :delete]

  def index
    render json: Department.all
  end

  def create
    department = current_user.departments.new(departments_params)
    if department.save
      render json: department
    else
      render json: { errors: department.errors }, status: :unprocessable_entity 
    end
  end

  def update
    department = current_user.departments.find(params[:id])
      if department.update(department_params)
    render json: department
      else
        render json: { errors: department.errors }, status: :unprocessable_entity
      end
  end

  def destroy
    current_user.departments.find(params[:id]).destroy
    render json: { message: 'Department deleted' }
  end

  private

  def department_params
    params.require(:department).permit(:title, :user_id)
  end

end
