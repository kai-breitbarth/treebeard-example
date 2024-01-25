from django.shortcuts import render
from django.template import loader
from .models import Category


def index(request):
    def index_maker():
        rootnodes = Category.get_root_nodes()

        def _index(nodes):
            for node in nodes:
                if node.is_leaf():
                    yield loader.render_to_string("tree/p_leaf.html", {"node": node})
                    continue
                yield loader.render_to_string(
                    "tree/p_branch.html",
                    {"node": node, "content": _index(node.get_children())},
                )

        return _index(rootnodes)

    context = {
        "content": index_maker(),
    }
    return render(request, "tree/index.html", context)
