myDiagram.nodeTemplateMap.add("SimpleNode",
                $(go.Node, "Spot",
                    $(go.Shape, "Rectangle", { fill: "beige", desiredSize: new go.Size(100, 50) }),

                    
                    $(go.Panel, "Auto", 
                        $(go.Shape, "Rectangle", { fill: "beige", desiredSize: new go.Size(100,50) }),
                        $(go.TextBlock, "Declare")
                    ),
                    $(go.Shape, "Rectangle", { fill: "beige", desiredSize: new go.Size(10,50), alignment: go.Spot.Left, stretch: go.GraphObject}),
                    $(go.Shape, "MinusLine",{fill:"beige", desiredSize: new go.Size(107,50), alignment: new go.Spot(0.47,0.21)})
                    
                )
            );