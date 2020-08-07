module ApplicationHelper
	def is_active?(path)
		return 'active' if action_name == path
	end
end
