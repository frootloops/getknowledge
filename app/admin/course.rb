ActiveAdmin.register Course do
  permit_params :name, :internal_id, :discipline_id
end
