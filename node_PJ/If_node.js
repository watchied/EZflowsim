myDiagram.nodeTemplateMap.add("SimpleNode",
                $(go.Node, "Spot",
                    $(go.Shape, "Diamond", { fill: "white", desiredSize: new go.Size(100, 10), alignment: go.Spot.Top, stretch: go.GraphObject }),
                    $(go.Panel, "Auto",
                        $(go.Shape, "Diamond", { fill: "pink", desiredSize: new go.Size(100, 50) }),
                        $(go.TextBlock, "If", { desiredSize: new go.Spot(0.5, 0.5) })
                    )

                )
            );